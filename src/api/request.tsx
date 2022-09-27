import React from 'react'
import axios, { AxiosResponse, Method } from 'axios'

const api = axios.create()

type requestProps = { method: Method; url: string; params: string }
const request = (details: requestProps): Promise<AxiosResponse> => {
  return api.request(details)
}

export default request
