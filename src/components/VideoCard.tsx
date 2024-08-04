
export function VideoCard(props: any) {
  return (
    <div className="p-3">
      <img src={props.image} className="rounded-xl" />

      <div className="grid grid-cols-12 pt-2">
        <div className="col-span-1 pl-5">
          <img className="rounded-full h-12 w-12" src={props.thumb} alt="" />
        </div>
        <div className="col-span-11 pl-2">
          <div>
            {props.title}
          </div>
          <div className="text-gray-400 text-base">
            {props.author}
          </div>
          <div className="text-gray-400 text-base">
            {props.subs} | {props.views}
          </div>
        </div>
      </div>
    </div>
  )
}