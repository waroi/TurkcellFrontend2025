import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCoinsStart, fetchCoinsSuccess, fetchCoinsFailure } from './../store/slices/cryptoSlice'
import { fetchCryptoData } from './../services/cryptoService'
import { RootState } from './../store/store'

export const useCryptoData = () => {
  const dispatch = useDispatch()
  const { coins, loading, error } = useSelector((state: RootState) => state.crypto)

  useEffect(() => {
    const loadData = async () => {
      dispatch(fetchCoinsStart())
      try {
        const data = await fetchCryptoData()
        dispatch(fetchCoinsSuccess(data))
      } catch (err: any) {
        dispatch(fetchCoinsFailure(err.message))
      }
    }

    loadData()
    const interval = setInterval(loadData, 60000)
    return () => clearInterval(interval)
  }, [dispatch])

  return { coins, loading, error }
}