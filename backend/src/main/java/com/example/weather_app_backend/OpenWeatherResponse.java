package com.example.weather_app_backend;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public class OpenWeatherResponse {

    @JsonProperty("coord")
    public Coord coord;

    @JsonProperty("weather")
    public List<Weather> weather;

    @JsonProperty("main")
    public Main main;

    @JsonProperty("wind")
    public Wind wind;

    @JsonProperty("clouds")
    public Clouds clouds;

    @JsonProperty("sys")
    public Sys sys;

    @JsonProperty("name")
    public String name;

    public static class Coord {
        @JsonProperty("lon")
        public double lon;
        @JsonProperty("lat")
        public double lat;
    }

    public static class Weather {
        @JsonProperty("id")
        public int id;
        @JsonProperty("main")
        public String main;
        @JsonProperty("description")
        public String description;
        @JsonProperty("icon")
        public String icon;
    }

    public static class Main {
        @JsonProperty("temp")
        public double temp;
        @JsonProperty("feels_like")
        public double feels_like;
        @JsonProperty("temp_min")
        public double temp_min;
        @JsonProperty("temp_max")
        public double temp_max;
        @JsonProperty("pressure")
        public int pressure;
        @JsonProperty("humidity")
        public int humidity;
    }

    public static class Wind {
        @JsonProperty("speed")
        public double speed;
        @JsonProperty("deg")
        public int deg;
    }

    public static class Clouds {
        @JsonProperty("all")
        public int all;
    }

    public static class Sys {
        @JsonProperty("country")
        public String country;
        @JsonProperty("sunrise")
        public long sunrise;
        @JsonProperty("sunset")
        public long sunset;
    }
}