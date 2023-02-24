import { exampleType } from "@/types/example.type";
import http from "@/utils/http";

export const getExampleApi = (page: PropertyKey, limit: PropertyKey) =>
  http.get<exampleType>("posts");

export const getWeatherApi = (location:string,time:string)=>{http.get("future.json",{
  params: {q: location, dt: time},
  headers: {
    'X-RapidAPI-Key': '440eaea463msh39c8c2aa4bcfec0p1f1e94jsnf6c2cc804b9f',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
})}

