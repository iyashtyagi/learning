import { RecoilRoot, useRecoilValue } from "recoil"
import { avatarAtom, personalInfoAtom, statsAtom } from "./atoms/usersAtom";

export default function App(){

    return(<>
        <RecoilRoot>
            <ProfileRender/>
        </RecoilRoot>
    </>)
}

function ProfileRender(){

    return(
        <div>
            <AvatarRender />
            <PersonalInfoRender />
            <hr />
            <StatsRender />
        </div>
    )
}

function AvatarRender(){
    const avatar = useRecoilValue(avatarAtom);

    return(
        <div className="avatar-div">
            <img src={avatar} alt="user-avatar" />
        </div>
    )
}

function PersonalInfoRender(){

    const {name, age, location} = useRecoilValue(personalInfoAtom);

    return(
        <div className="profile-info-div">
            <p><b>{name}</b>{age}</p>
            <p>{location}</p>
        </div>
    )
}

function StatsRender(){
    const {followersCount, likesCount, photosCount} = useRecoilValue(statsAtom);

    const countFormat = (num) =>{
        return (num>999?`${num/1000}K`:num)
    }


    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>{countFormat(followersCount)}</th>
                        <th>{countFormat(likesCount)}</th>
                        <th>{countFormat(photosCount)}</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Followers</td>
                        <td>Likes</td>
                        <td>Photos</td>
                    </tr>
                </tbody>

            </table> 
            
        </div>
    )

}