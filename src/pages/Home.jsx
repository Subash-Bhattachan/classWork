import { useRef, useEffect } from "react"

export const Home = function () {
    const submitRef = useRef();
    useEffect(() => {
        setTimeout(() => {
            submitRef.current.click();
        }, 3000)
    }, [])
    
    //console.log(numberRef);

    return (
        <>
            <h1>Home Page</h1>
            <form>
                <label>Name</label>
                <input type="text" name="name" required />
                <label>Email</label>
                <input type="text" name="email" required />
                <label>Password</label>
                <input type="password" name="password" required />
                <label>Confirm Password</label>
                <input type="password" name="confirm-password" required />
                
                <input type="submit" value="Submit" ref={submitRef} />
            </form>




        </>
    )
}