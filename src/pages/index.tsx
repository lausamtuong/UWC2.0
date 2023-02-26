import { getExampleApi, getWeatherApi } from "@/apis/ex.apis"
import { useEffect, useState } from "react"
import {
  useQuery,
  
} from '@tanstack/react-query'

export default function Home() {
  const query = useQuery({ queryKey: ['posts'], queryFn:()=> getWeatherApi("London","2022-12-25")})
  return (
    <h1 className="text-[100px] text-red-500 font-bold underline">
      Login
    </h1>
  )
}


