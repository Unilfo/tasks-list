import {useDispatch, useSelector} from 'react-redux'
import {fetchDog} from '../../store/actions'


export default function App() {
    const dispatch = useDispatch()
    const loading = useSelector((state) => state.loading)
    const error = useSelector((state) => state.error)
    const url = useSelector((state) => state.url)

    return (
        <div>
            <button onClick={() => dispatch(fetchDog())}>Show Dog</button>
            {loading
                ? <p>Loading...</p>
                : error
                    ? <p>Error, try again</p>
                    : <p><img src={url}/></p>}
        </div>
    )
}
