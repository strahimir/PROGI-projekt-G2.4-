package com.gearshare.gearshare;

import lombok.extern.java.Log;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@Log
public class GearshareApplication {

	public static void main(String[] args) {
		SpringApplication.run(GearshareApplication.class, args);
	}

}
