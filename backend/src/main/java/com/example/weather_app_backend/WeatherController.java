package com.example.weather_app_backend;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.ResponseEntity;

import org.springframework.beans.factory.annotation.Autowired;


// This controller makers API calls to openweathermap API
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class WeatherController {

    // private final String apiKey = "2ef2665ebb8b531e47910ef3fc2a9b11"; // Access openweathermap website for key

    @Autowired
    private OpenWeatherMapConfig config;

    private final RestTemplate restTemplate = new RestTemplate();

    // Defines the Get method for /weather endpoint
    @GetMapping(value = "/weather", produces = "application/json")
    public ResponseEntity<Object> getWeather(@RequestParam String city) {
        // String url = String.format("https://api.openweathermap.org/data/2.5/weather?q=%s&appid=%s&units=metric", city, apiKey);

        String url = String.format("%s/weather?q=%s&appid=%s&units=metric",
                config.getBaseUrl(), city, config.getKey());

        try {

            OpenWeatherResponse response = restTemplate.getForObject(url, OpenWeatherResponse.class);
            System.out.println("Returning response");
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            //  ResponseEntity.status(500).body("Error fetching weather data");
            e.printStackTrace();
            return ResponseEntity.status(500).body("Error fetching weather data: " + e.getMessage());
        }
    }
}