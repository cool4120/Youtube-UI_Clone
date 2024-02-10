export const VideoCards = (props:any) => {
    return(
    <div className="p-3 cursor-pointer">
            <img className='rounded-xl' src={props.Image}></img>
        <div className="grid grid-cols-12 pt-2">
            <div className="col-span-1">
                <img className ="rounded-full w-20 h-11"src={props.ImageThumbnail}></img>

            </div>
            <div className="col-span-11 pl-2">
                <div>
                    {props.title}
                </div>
                <div className="col-span-11 text-base text-gray-500">
                {props.channel}
                </div>
                <div className="col-span-11 text-base text-gray-500">
                    {props.views}
                </div>
            </div>
        </div>
    </div>
    )
}