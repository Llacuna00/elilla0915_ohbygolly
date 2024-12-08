import './Home.css'
import profile from '../graphics/Profile.jpg'

export default function Home() {

    return(
        <div>
            <p>Welcome to Oh By Golly! A boutique of handmade crafts and tailoring!
                Take a look at our premade items, ranging from quilts to trinkets,
                or contact us for a personalized item. We take orders of all kinds,
                so don't hesitate to inquire.
            </p>
            <img src={profile} id="profile"/>
        </div>
    )
}