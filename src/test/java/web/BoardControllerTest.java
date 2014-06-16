package web;

import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = WebConfig.class)
@WebAppConfiguration
public class BoardControllerTest {

	@Autowired
	private WebApplicationContext wac;

	private MockMvc mockMvc;

	@Before
	public void setup() {
		mockMvc = MockMvcBuilders.webAppContextSetup(this.wac).build();
	}

	@Test
	public void testShowBoard() throws Exception {
		mockMvc.perform(
			get("api/board").accept(APPLICATION_JSON))
			.andExpect(status().isOk())
			.andDo(print());
		// .andExpect(content().string(""))
	}

	@Test
	public void testMoveTask() throws Exception {
		mockMvc.perform(
			post("api/board/{taskId}", 1).accept(APPLICATION_JSON)
				.content("{ \"status\": \"IN_PROGRESS\", \"priority\": 1 }")
				.contentType(APPLICATION_JSON))
			.andExpect(status().isOk()).andDo(print());
			// .andExpect(content().string(""))
	}

}
