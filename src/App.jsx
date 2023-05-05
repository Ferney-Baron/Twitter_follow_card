import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {

    const users = [
        {
            isFollowing : true,
            userName : 'Sana',
            name : 'Sana Minatozaki',
            img : 'https://i.pinimg.com/236x/cf/7a/56/cf7a560ca66ecc9d92d5172e4c9acb2b.jpg'
        },
        {
            isFollowing : false,
            userName : 'Jihyo',
            name : 'Park Jihyo',
            img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOaB5Dr2NW9_7QnnlFUsE5rn2DwRuDdZGGBA&usqp=CAU'
        },
        {
            isFollowing : false,
            userName : 'Mina',
            name : 'Mina',
            img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeELcoL-5-tHaJ595R-1kFUYGrfm2i5dFlkQ&usqp=CAU'            
        }
    ];

    return (
        <section className="app">
            {
                users.map( user => {
                    const { isFollowing, name, userName, img } = user;
                    return (
                        <TwitterFollowCard 
                            key={userName}
                            initialIsFollowing={isFollowing}
                            name={name}
                            userName={userName}
                            img={img} 
                        />
                    )
                })
            }
        </section>
    )
}