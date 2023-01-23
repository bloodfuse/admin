import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import Text from '../atoms/Text'

const CircularBar = ({ data }) => {
  return (
    <>
      <div className="w-[160px] h-[160px] mx-2">
        <CircularProgressbarWithChildren
          styles={buildStyles({
            strokeLinecap: 'butt',
            pathColor: data.color,
            trailColor: '#F3F3F3',
          })}
          strokeWidth={11}
          value={data.percentage}
        >
          <div className="flex-col items-center justify-center py-5">
            {data.percentage > 0 ? (
              <>
                <Text className="text-slate-500 font-semibold px-4">{data.visitors}</Text>
                <Text className="text-slate-700 font-bold">Visitors</Text>
              </>
            ) : (
              <Text className="text-slate-700 font-semibold px-4">No Visitors</Text>
            )}
          </div>
        </CircularProgressbarWithChildren>
      </div>
    </>
  )
}

export default CircularBar
