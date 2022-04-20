import { useEffect, useState } from 'react'
import profession from '../mockData/professions.json'
import quality from '../mockData/qualities.json'
import users from '../mockData/users.json'
import httpService from '../services/http.service'

const useMockData = () => {
  const statusConst = {
    idle: 'Not Started',
    pending: 'In process',
    succesed: 'Ready',
    error: 'Error occured'
  }
  const [error, setError] = useState(null)
  const [status, setStatus] = useState(statusConst.idle)
  const [progress, setProgress] = useState(0)
  const [count, setCount] = useState(0)
  const summaryCount = profession.length + quality.length + users.length
  const incrementCount = () => {
    setCount((prevState) => prevState + 1)
  }
  const updateProgress = () => {
    if (count !== 0 && status === statusConst.idle) {
      setStatus(statusConst.pending)
    }
    const newProgress = Math.floor((count / summaryCount) * 100)
    if (progress < newProgress) {
      setProgress(() => newProgress)
    }
    if (newProgress === 100) {
      setStatus(statusConst.succesed)
    }
  }
  useEffect(() => {
    updateProgress()
  }, [count])
  async function initialize() {
    try {
      for (const prof of profession) {
        await httpService.put('profession/' + prof._id, prof)
        incrementCount()
      }
      for (const qual of quality) {
        await httpService.put('quality/' + qual._id, qual)
        incrementCount()
      }
      for (const user of users) {
        await httpService.put('user/' + user._id, user)
        incrementCount()
      }
    } catch (error) {
      setError(error)
      setStatus(statusConst.error)
    }
  }

  return { error, initialize, progress, status }
}

export default useMockData
