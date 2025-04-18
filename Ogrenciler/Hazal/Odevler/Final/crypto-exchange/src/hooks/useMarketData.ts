import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCoinsStart, fetchCoinsSuccess, fetchCoinsFailure } from './../store/slices/cryptoSlice'
import { getLatestListings } from './../lib/api/coinmarket'
import {RootState} from './../store/store'


export const useMarketData = () => {
  const dispatch = useDispatch()
  const marketData = useSelector((state: RootState) => state.crypto.marketData);
  const loading = useSelector((state: RootState) => state.crypto.loading);
  const error = useSelector((state: RootState) => state.crypto.error);

  useEffect(() => {
    const loadData = async () => {
      dispatch(fetchCoinsStart())
      try {
        const { success, data, error } = await getLatestListings()
        if (success) {
          dispatch(fetchCoinsSuccess(data.data))
        } else {
          dispatch(fetchCoinsFailure(error || 'Failed to fetch market data'))
        }
      } catch (err) {
        dispatch(fetchCoinsFailure('Network error'))
      }
    }

    loadData()
    const interval = setInterval(loadData, 60000)
    return () => clearInterval(interval)
  }, [dispatch]);

  return { marketData, loading, error };
}
