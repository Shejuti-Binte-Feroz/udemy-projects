package com.eazybytes.eazystore.controller;

import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/logging")
@Slf4j
public class LoggingController {

//    private static final Logger log = LoggerFactory.getLogger(LoggingController.class);

    @GetMapping
    public ResponseEntity<String> testLogging(){
        log.trace("TRACE: This is a log trace message");
        log.debug("DEBUG: This is a log debug message");
        log.error("ERROR: This is a log error message");
        log.info("INFO: This is a log info message");
        log.warn("WARN: This is a log warn message");
        return ResponseEntity.ok().body("Logging Tested Successfully");
    }
}
