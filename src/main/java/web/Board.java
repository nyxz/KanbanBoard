package web;

public class Board {
	private Long id;
	private String name;
	
	public Board() {
		id = 25L;
		name = "Test";
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

}
