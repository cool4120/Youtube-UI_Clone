import { VideoCards } from "./VideoCards"

export const VideoGrid =  () => {
    const data =[ {
    title:'Unfiltered By Samdish Ft Nawazuddin Siddique| Powered by woodland' ,
    ImageThumbnail:'channelIcon.jpg',
    Image:'sddefault.jpg',
    channel:'Unfiltered By Samdish',
    views:'331K | 13 hours Ago '
        },
    {   title:'Sisyphus and the Impossible Dream' ,
        ImageThumbnail:'unnamed.jpg',
        Image:'sddefault (1).jpg',
        channel:'CaseyNeistat',
        views:'331K | 13 hours Ago '
    },
    {   title:'Unfiltered By Samdish Ft Nawazuddin Siddique| Powered by woodland' ,
        ImageThumbnail:'channelIcon.jpg',
        Image:'sddefault.jpg',
        channel:'Unfiltered By Samdish',
        views:'331K | 13 hours Ago '
    },
     {   title:'Sisyphus and the Impossible Dream' ,
        ImageThumbnail:'unnamed.jpg',
        Image:'sddefault (1).jpg',
        channel:'CaseyNeistat',
        views:'331K | 13 hours Ago '
    },
    {   title:'Unfiltered By Samdish Ft Nawazuddin Siddique| Powered by woodland' ,
        ImageThumbnail:'channelIcon.jpg',
        Image:'sddefault.jpg',
        channel:'Unfiltered By Samdish',
        views:'331K | 13 hours Ago '
    }, 
    {   title:'Sisyphus and the Impossible Dream' ,
        ImageThumbnail:'unnamed.jpg',
        Image:'sddefault (1).jpg',
        channel:'CaseyNeistat',
        views:'331K | 13 hours Ago '
    },
    {   title:'Unfiltered By Samdish Ft Nawazuddin Siddique| Powered by woodland' ,
        ImageThumbnail:'channelIcon.jpg',
        Image:'sddefault.jpg',
        channel:'Unfiltered By Samdish',
        views:'331K | 13 hours Ago '
    },
    {   title:'Unfiltered By Samdish Ft Nawazuddin Siddique| Powered by woodland' ,
        ImageThumbnail:'channelIcon.jpg',
        Image:'sddefault.jpg',
        channel:'Unfiltered By Samdish',
        views:'331K | 13 hours Ago '
    },
     {   title:'Sisyphus and the Impossible Dream' ,
        ImageThumbnail:'unnamed.jpg',
        Image:'sddefault (1).jpg',
        channel:'CaseyNeistat',
        views:'331K | 13 hours Ago '
    },
    ]
    return(<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {data.map(i =>
              <div>
              <VideoCards title={i.title} Image={i.Image} ImageThumbnail={i.ImageThumbnail} channel={i.channel} views={i.views}></VideoCards>
              </div>
        )}
          
    </div>)
}