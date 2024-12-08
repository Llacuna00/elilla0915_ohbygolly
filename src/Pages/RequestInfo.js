//this page allows the user to send information to the seller
import './RequestInfo.css';

export default function RequestInfo() {

    return (
        <div>
           <body id='RequestInfo'>
                <label for="name">Name</label>
                <input type="text" id="name"></input><br></br>
                <label for="number">Phone Number</label>
                <input type="text" id="number"></input><br></br>
                <label for="email">Email</label>
                <input type="text" id="email"></input><br></br>
                <label for="info">Info</label>
                <input type="text" id="info"></input><br></br>
           </body>
           <button id='Submit'>Submit</button>
        </div>
    );
}
