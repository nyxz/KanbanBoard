package web;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

import javax.annotation.PostConstruct;

import model.Board;
import model.Task;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.type.CollectionType;

@Controller
@RequestMapping("/board")
public class BoardController {

	private List<Board> boards;

    @PostConstruct
	public void init() throws JsonParseException, JsonMappingException, IOException {
	    final ObjectMapper mapper = new ObjectMapper();
		final InputStream sampleBoard = Thread.currentThread().getContextClassLoader()
				.getResourceAsStream("example-board.json");
		final CollectionType boardListType = mapper.getTypeFactory().constructCollectionType(List.class, Board.class);

		boards = mapper.readValue(sampleBoard, boardListType);
	}

    @RequestMapping(value = "/all", method = RequestMethod.GET, produces = APPLICATION_JSON_VALUE)
    public @ResponseBody List<Board> getBoards() {
        return boards;
    }

    @RequestMapping(value = "{boardId}", method = RequestMethod.GET, produces = APPLICATION_JSON_VALUE)
    public @ResponseBody Board getBoard(@PathVariable Long boardId) {
        try {
            return boards.get(boardId.intValue());
        } catch (Exception e) {
            e.printStackTrace();
            return new Board();
        }
    }

	@RequestMapping(value = "{taskId}", method = RequestMethod.POST, 
		consumes = APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE)
	public @ResponseBody Board moveTask(@PathVariable Long taskId, @RequestBody Position position) {
	    // TODO make it accept project and task (mandatory)
		for (Task task : boards.get(0).getTasks()) {
			if (task.getId().equals(taskId)) {
				task.setStatus(position.getStatus());
				task.setPriority(position.getPriority());
			}
		}
		return boards.get(0);
	}
}
