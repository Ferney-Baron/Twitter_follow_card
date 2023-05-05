import PropTypes from 'prop-types';
import { useState } from 'react';

export function TwitterFollowCard({ userName, name, img, initialIsFollowing}) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);   

    const followingState = () => setIsFollowing(!isFollowing);

    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';

    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img 
                    src= { img }
                    alt="Avatar"
                    className="tw-followCard-avatar" 
                />
                <div className="tw-followCard-info">
                    <strong>{ name }</strong>
                    <span className="tw-followCard-infoUserName">@{ userName }</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={followingState}>
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopFollow'>
                        Dejar de Seguir
                    </span>
                </button>
            </aside>
        </article>
    )
}

TwitterFollowCard.propTypes = {
    userName : PropTypes.string.isRequired,
    name : PropTypes.string,
    initialIsFollowing : PropTypes.bool,
    img : PropTypes.string
}

