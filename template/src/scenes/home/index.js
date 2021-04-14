import { useSelector, useDispatch } from 'react-redux'
import { colorIdView, setColorId } from '../_slice/home.slice'

export default function Home() {
  const dispatch = useDispatch()
  const colorId = useSelector(colorIdView)

  const changeColor = useCallback(() => {
    dispatch(setColorId(colorId + 1))
  })

  return <HomePresentational changeColor={changeColor} colorId={colorId} />
}
