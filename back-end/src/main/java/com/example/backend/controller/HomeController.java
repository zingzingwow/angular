package com.example.backend.controller;

import com.example.backend.model.NumberPair;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200")
@Slf4j
public class HomeController {

    @GetMapping("/get-sum-v1")
    public ResponseEntity<Integer> getSumV1(@RequestParam Integer numberOne,
                                            @RequestParam Integer numberTwo) {

        log.info("Rest request to get sum of {} and {} ",numberOne, numberTwo);
        return ResponseEntity.ok(numberOne + numberTwo);
    }

    @GetMapping("/get-sum-v2/{numberOne}/{numberTwo}")
    public ResponseEntity<Integer> getSumV2(@PathVariable("numberOne") Integer numberOne,
                                            @PathVariable("numberTwo") Integer numberTwo) {

        log.info("Rest request to get sum of {} and {} ",numberOne, numberTwo);
        return ResponseEntity.ok(numberOne + numberTwo);
    }

    @GetMapping("/get-sum-v3")
    public ResponseEntity<Integer> getSumV3(@RequestParam Integer numberOne,
                                            @RequestParam Integer numberTwo) {

        log.info("Rest request to get sum of {} and {} ",numberOne, numberTwo);
        return ResponseEntity.ok(numberOne + numberTwo);
    }

    @PostMapping("/get-sum-v4")
    public ResponseEntity<Integer> getSumV4(@RequestBody NumberPair pair) {

        log.info("Rest request to get sum of {} and {} ",pair.getNumberOne(), pair.getNumberTwo());
        return ResponseEntity.ok(pair.getNumberOne() + pair.getNumberTwo());
    }
}
