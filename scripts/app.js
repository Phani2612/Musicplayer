// const PlayButton = document.querySelector("#play")
// const AudioFile = document.querySelector("audio")

// let isAudioPlaying = false

// function playAudio()
// {
//     isAudioPlaying = true
//     AudioFile.play()
//     // play icon to pause icon 
//     PlayButton.classList.replace("fa-play", "fa-pause")
// }

// function pauseAudio()
// {
//     isAudioPlaying = false
//     AudioFile.pause()
//     // pause icon to play icon 
//     PlayButton.classList.replace("fa-pause", "fa-play")
// }

// PlayButton.addEventListener("click", function()
// {
//     //Logic to play the audio / pause the audio

//     if(isAudioPlaying)
//     {
//         pauseAudio()
//     }
//     else
//     {
//         playAudio()
//     }

// })

// const TotalDuration = document.querySelector(".totalduration")
// const CurrentTime = document.querySelector(".currenttime")
// const ProgressBar = document.querySelector(".progressbar")

// AudioFile.addEventListener("timeupdate", function(info)
// {
    

//     let myCurrentTime = info.srcElement.currentTime
//     let myDuration = info.srcElement.duration

//     let audioPlayedPercentage = myCurrentTime / myDuration * 100

//     ProgressBar.style.width = `${audioPlayedPercentage}%`

//     // myDuration = 132.9 seconds ==> minutes : seconds // 2.21 
//     // 2 min and 12 sec 
//     let durationInMinutes = Math.floor(myDuration / 60)

//     let durationInSeconds = Math.floor(myDuration % 60)
    
//     let myTotalDuration = `${durationInMinutes}:${durationInSeconds}`

//     TotalDuration.textContent = myTotalDuration



//     let currentTimeInMinutes = Math.floor(myCurrentTime / 60)

//     let currentTimeInSeconds = Math.floor(myCurrentTime % 60)

//     if(currentTimeInSeconds < 10)
//     {
//         currentTimeInSeconds = `0${currentTimeInSeconds}`
//     }

//     let myTotalCurrentTime = `${currentTimeInMinutes}:${currentTimeInSeconds}`

//     CurrentTime.textContent = myTotalCurrentTime

// })

// // Image, audio, singer name

// const ForwardButton = document.querySelector("#forward")

// const BackwardButton = document.querySelector("#backward")

// const songsData = [

//     {
//         singerName: "Modern talking",
//         imageAndAudio: "image-1"
//     },
   
//     {
//         singerName: "OG",
//         imageAndAudio: "image-2"
//     },
//     {
//         singerName: "Animal",
//         imageAndAudio: "image-3"
//     }
// ]

// const SingerName = document.querySelector("h3")

// const MyImage = document.querySelector("img")

// function loadTheSong(songIndex)
// {
//     SingerName.textContent = songsData[songIndex].singerName // BBB

//     AudioFile.src = `audio/${songsData[songIndex].imageAndAudio}.mp3` // image-2.mp3

//     MyImage.src = `images/${songsData[songIndex].imageAndAudio}.jpg` // image-2.jpg
// }

// let index = 0

// ForwardButton.addEventListener("click", function()
// {
//     LikeButton.classList.remove("change")

//     index++    

//     if(index > songsData.length - 1)
//     {
//         index = 0
//     }

//     loadTheSong(index)
//     playAudio()


//     console.log(index)
// })


// BackwardButton.addEventListener("click",function()

// {
//     LikeButton.classList.remove("change")

//     index--
    
//     if(index < 0)
//     {
//         index = 2
//     }

//     loadTheSong(index)
//     playAudio()
    


// }

// )

// const condition = true

// const LikeButton = document.querySelector("#like")

// LikeButton.addEventListener("click", function()
// {
//     // Logic to change the color to red
//     // LikeButton.style.color = "red"  
   
//     LikeButton.classList.add("change")
//     // LikeButton.classList.remove("dsfdf")

//     // Logic to store that particular song data permanently somewhere

    
//     localStorage.setItem(`singerName${index}`, SingerName.textContent)
//     localStorage.setItem(`imageUrl${index}`, MyImage.src)
    
//     // localStorage.removeItem(`singerName${index}`)
//     // localStorage.getItem(`singerName${index}`)
    
// })

// // STORING --> Database
// // Browser has inbuilt storage 
// // 2 types of storage available
// // 1)localStorage --> Stores the data permanently, 20MB
// // 2)sessionStorage --> Stores the data temporarly, 5MB

// // Javascript Object Format --> { key: value }

// const ProgressContainer = document.querySelector(".progresscontainer")


// ProgressContainer.addEventListener("click", function(event)
// {
//     // Logic to get the horizontal distance from the starting point till where the click was performed

//     let totalWidth = event.srcElement.offsetWidth

//     console.log(totalWidth)

//     let myDistance = event.offsetX

//     console.log(myDistance)

//     // console.log(totalWidth / myDistance)

//     let moved = totalWidth/myDistance

    

//     // console.log(totalWidth, myDistance)

//     ProgressBar.style.width = `${myDistance}px`

    

    
// })


const PlayButton = document.querySelector("#play")
const AudioFile = document.querySelector("audio")



let isAudioPlaying = false

function playAudio()
{
    isAudioPlaying = true
    AudioFile.play()
    // play icon to pause icon 
    PlayButton.classList.replace("fa-play", "fa-pause")
}

function pauseAudio()
{
    isAudioPlaying = false
    AudioFile.pause()
    // pause icon to play icon 
    PlayButton.classList.replace("fa-pause", "fa-play")
}

PlayButton.addEventListener("click", function()
{
    //Logic to play the audio / pause the audio

    if(isAudioPlaying)
    {
        pauseAudio()
    }
    else
    {
        playAudio()
    }

})

const TotalDuration = document.querySelector(".totalduration")
const CurrentTime = document.querySelector(".currenttime")
const ProgressBar = document.querySelector(".progressbar")

AudioFile.addEventListener("timeupdate", function(info)
{
    

    let myCurrentTime = info.srcElement.currentTime
    
    // console.log(myCurrentTime)
    
    let myDuration = info.srcElement.duration

    let audioPlayedPercentage = myCurrentTime / myDuration * 100

    ProgressBar.style.width = `${audioPlayedPercentage}%`

    // myDuration = 132.9 seconds ==> minutes : seconds // 2.21 
    // 2 min and 12 sec 
    let durationInMinutes = Math.floor(myDuration / 60)

    let durationInSeconds = Math.floor(myDuration % 60)
    
    let myTotalDuration = `${durationInMinutes}:${durationInSeconds}`

    TotalDuration.textContent = myTotalDuration

    let currentTimeInMinutes = Math.floor(myCurrentTime / 60)

    let currentTimeInSeconds = Math.floor(myCurrentTime % 60)

    if(currentTimeInSeconds < 10)
    {
        currentTimeInSeconds = `0${currentTimeInSeconds}`
    }

    let myTotalCurrentTime = `${currentTimeInMinutes}:${currentTimeInSeconds}`

    CurrentTime.textContent = myTotalCurrentTime

})

// Image, audio, singer name

const ForwardButton = document.querySelector("#forward")

const BackwardButton = document.querySelector("#backward")

const songsData = [

    {
        singerName: "Modern talking",
        imageAndAudio: "image-1"
    },
   
    {
        singerName: "OG",
        imageAndAudio: "image-2"
    },
    {
        singerName: "Animal",
        imageAndAudio: "image-3"
    },

    {
        singerName: "Iam Pirate",
        imageAndAudio: "image-4"
    },
    {
        singerName: "Devara",
        imageAndAudio: "image-5"
    },

    {
        singerName: "Bang Bang",
        imageAndAudio: "image-6"
    },

    {
        singerName: "Worth Nothing",
        imageAndAudio: "image-7"
    }


]





const SingerName = document.querySelector("h3")

const MyImage = document.querySelector("img")

function loadTheSong(songIndex)
{
    SingerName.textContent = songsData[songIndex].singerName // BBB

    AudioFile.src = `scripts/audio/${songsData[songIndex].imageAndAudio}.mp3` // image-2.mp3

    MyImage.src = `scripts/images/${songsData[songIndex].imageAndAudio}.jpg` // image-2.jpg
}

let index = 0

ForwardButton.addEventListener("click", function()
{
    LikeButton.classList.remove("change")

    index++    

    if(index > songsData.length - 1)
    {
        index = 0
    }

    loadTheSong(index)
    playAudio()


    console.log(index)
})


BackwardButton.addEventListener("click",function()

{
    LikeButton.classList.remove("change")

    index--
    
    if(index < 0)
    {
        index = songsData.length - 1
    }

    loadTheSong(index)
    playAudio()
    


}

)

const condition = true

const LikeButton = document.querySelector("#like")

LikeButton.addEventListener("click", function()
{
    // Logic to change the color to red
    // LikeButton.style.color = "red"  
   
    LikeButton.classList.add("change")
    // LikeButton.classList.remove("dsfdf")

    // Logic to store that particular song data permanently somewhere

    
    localStorage.setItem(`singerName${index}`, SingerName.textContent)
    localStorage.setItem(`imageUrl${index}`, MyImage.src)
    
    // localStorage.removeItem(`singerName${index}`)
    // localStorage.getItem(`singerName${index}`)
    
})

// STORING --> Database
// Browser has inbuilt storage 
// 2 types of storage available
// 1)localStorage --> Stores the data permanently, 20MB
// 2)sessionStorage --> Stores the data temporarly, 5MB

// Javascript Object Format --> { key: value }

const ProgressContainer = document.querySelector(".progresscontainer")

ProgressContainer.addEventListener("click", function(event)
{
    // Logic to get the horizontal distance from the starting point till where the click was performed

    let totalWidth = event.srcElement.offsetWidth

    // console.log(totalWidth)

    let myDistance = event.offsetX

    // console.log(myDistance)

    // console.log(totalWidth / myDistance)



     let movedPercentage = myDistance /totalWidth


     let newtime = movedPercentage * AudioFile.duration


     AudioFile.currentTime = newtime

    //  console.log(moved)
  //As the current time changed , again the entire Audiofile.listener will execute from that time (newtime)
    

    // console.log(totalWidth, myDistance)

    ProgressBar.style.width = `${movedPercentage * 100}px`

    

    
    
})



