import { useSelector, useDispatch } from 'react-redux'
import { colorIdView, setColorId } from '../_slice/home.slice'

import HomePresentational from './home'

export default function Home() {
  const dispatch = useDispatch()
  const colorId = useSelector(colorIdView)

  const changeColor = useCallback(() => {
    dispatch(setColorId(colorId + 1))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[colorId])

  return <HomePresentational changeColor={changeColor} colorId={colorId} />
}
