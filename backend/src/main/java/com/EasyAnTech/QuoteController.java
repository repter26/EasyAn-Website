package com.EasyAnTech;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/quotes")
public class QuoteController {

    @Autowired
    private QuoteService service;

    @PostMapping
    public Quote createQuote(@RequestBody Quote quote) {
        return service.saveQuote(quote);
    }

    @GetMapping
    public List<Quote> getAllQuotes() {
        return service.getAllQuotes();
    }

    @GetMapping("/{id}")
    public Quote getQuoteById(@PathVariable String id) {
        return service.getQuoteById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteQuoteById(@PathVariable String id) {
        service.deleteQuoteById(id);
    }
}
