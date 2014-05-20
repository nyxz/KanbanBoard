package web;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

import java.io.IOException;
import java.io.InputStream;

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

@Controller
@RequestMapping("/board")
public class BoardController {

	private Board board;

	@PostConstruct
	public void init() throws JsonParseException, JsonMappingException, IOException {
		ObjectMapper mapper = new ObjectMapper();
		InputStream sampleBoard = Thread.currentThread().getContextClassLoader()
				.getResourceAsStream("example-board.json");
		board = mapper.readValue(sampleBoard, Board.class);
	}

	@RequestMapping(method = RequestMethod.GET, produces = APPLICATION_JSON_VALUE)
	public @ResponseBody Board showBoard() {
		return board;
	}

	@RequestMapping(value = "{taskId}", method = RequestMethod.POST, 
		consumes = APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE)
	public @ResponseBody Board moveTask(@PathVariable Long taskId, @RequestBody Position position) {
		for (Task task : board.getTasks()) {
			if (task.getId().equals(taskId)) {
				task.setStatus(position.getStatus());
				task.setPriority(position.getPriority());
			}
		}
		return board;
	}

}
