package web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/boards")
public class BoradManagementController {
	
	@RequestMapping(value = "{boardId}", method = RequestMethod.GET, produces = "application/json")
	public @ResponseBody Board shwoBoard(@PathVariable Long boardId) {
		return new Board();
	}

}
