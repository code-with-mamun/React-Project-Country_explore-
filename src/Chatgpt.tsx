import { useState } from "react";

export default function ToggleMessage() {
  const [isVisible, setIsvisible] = useState(false);
  function toggleHandle() {
    if (isVisible ) {
      return setIsvisible(false);
    }
    return setIsvisible(true);
  }
  return (
    <div>
   
      <button onClick={toggleHandle}>

        {isVisible ? "Hide Message" : "Show Message"}
      </button>
      {isVisible && <h2>Hello Mamun</h2>}
    </div>
  );
}

// export default function ToggleMessage ()  {
//     const [isVisible,setIsvisible] = useState (false)

//      function toggleHandle () {
//             if (isVisible === true) {
//                 return setIsvisible(false)
//             }
//             return setIsvisible (true)
//         }

//      return (
//        <div>
//          <button onClick={toggleHandle}>{` ${isVisible && 'Hello Mamun'}  ${isVisible? 'Hide Message': 'Show Message'}`}</button>
//        </div>
//      )
//     }

// import { useState } from "react";

// function Counter () {
//     const [count,setCount] = useState(0);
//     function statUpdate (){
//         setCount(count +1)
//     }

//     return (
//         <div>
//             <h2>Count:{count}</h2>
//             <button onClick={statUpdate} ></button>
//         </div>
//     )
// }

// function ClickButton () {
//     function handleClick () {
//         console.log('Button clicked')
//     }

//     return (

//             <button onClick={handleClick}></button>

//     )
// }

// function Student () {
//    const students = [
//   { name: 'Mamun', age: 20 },
//   { name: 'Rahim', age: 21 },
//   { name: 'Karim', age: 19 }
// ];
//     return (
//         <>
//        {students.map(stdn => <div  key={stdn.age}>Name:{stdn.name} Age:{stdn.age}</div>)}
//         </>
//     )
// }
// function Student () {
//     const students =  ['Mamun', 'Rahim', 'Karim'];
//     return (
//         <>
//         {students.map(stdn => <h2 key={stdn}>{stdn}</h2>)}
//         </>
//     )
// }

// function UserName () {
//     const userName = ''
//     return (
//         <div>
//             {userName || 'Guest User'}
//         </div>
//     )

// }

// function AdminPanel () {
//     const isAdmin = true;

//     return (
//         <div>
//             {isAdmin && <h2>Admin Panel</h2>}
//         </div>
//     )
// }

// function UserProfile () {
//     const isLoggedIn = false;
//     return (
//         <h2>
//             {isLoggedIn? 'Welcome Mamun':'Please Loging'}
//         </h2>
//     )
// }

// function UserProle () {
//     const isLoggedIn = true;
//     if (isLoggedIn === true) {
//         return <h2>Welcome Mamun</h2>
//     }
//     return <h2>Please Login</h2>
// }

// export function User ({name,age,role}) {
//     return (
//         <>
//         <h2>Name:{name}</h2>
//         <h2>Age:{age}</h2>
//         <h2>Role:{role}</h2>
//         </>
//     )
// }

// export function ProfileInfo () {
//     const name = 'Mamun'
//     const age = 20;
//     const isStudent = true;
//     return (
//         <div>
//             <h2>Name: {name}</h2>
//             <h2>Age: {age}</h2>
//             <h2>Next year age: {age + 1}</h2>
//             <h2>Status: {isStudent ? 'Student' : 'not a Student'}</h2>

//         </div>
//     )
// }

// export function ProfileInfo () {
//     const name = 'Mamun'
//     const role = 'Wev Developer'
//     const age = 20
//     return (
//         <div>
//             <h2>Name: {name}</h2>
//             <h2>Role: {role}</h2>
//             <h2>Age: {age}</h2>
//         </div>
//     )
// }
