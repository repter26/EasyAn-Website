package com.EasyAnTech;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class QuoteService {


    @Autowired
    private QuoteRepository repository;

    public Quote saveQuote(Quote quote) {
        return repository.save(quote);
    }

    public List<Quote> getAllQuotes() {
        return repository.findAll();
    }

    public Quote getQuoteById(String id) {
        return repository.findById(id).orElse(null);
    }

    public void deleteQuoteById(String id) {
        repository.deleteById(id);
    }
}
