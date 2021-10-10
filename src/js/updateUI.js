import {body, main, noUserInfo, avatarList, fullName, username, joinedDate, biography, repos, followers, following, locationSection, location, blogSection, blog, twitterSection, twitter, companySection, company} from './variables'

export const updateUI = data => {
    // reset to default
    noUserInfo.classList.toggle('disabled', true)
    main.classList.toggle('disabled', true)
    biography.classList.toggle('not-available', false)
    locationSection.classList.toggle('not-available', false)
    blogSection.classList.toggle('not-available', false)
    twitterSection.classList.toggle('not-available', false)
    companySection.classList.toggle('not-available', false)

    // remove info element if exists
    const elem = document.getElementById('info')
    if (elem) {
        elem.parentNode.removeChild(elem)
    }
    
    if (data.status === 'not found') {
        noUserInfo.classList.toggle('disabled', false)
        return
    }

    if (data.status === 'error') {
        let infoElement = document.createElement('div')
        infoElement.classList.add('main')
        infoElement.setAttribute('id', 'info')
        infoElement.append('Ooops please check your network connection...') 
        body.querySelector('.container').append(infoElement)
        return
    }

    main.classList.toggle('disabled', false)

    //avatar.setAttribute('src', data.avatar_url)
    avatarList.forEach(img => {
        img.setAttribute('src', data.avatar_url)
    })
    fullName.innerText = data.fullname
    username.innerText = data.username
    joinedDate.innerText = data.created_at

    biography.innerText = data.bio
    if (data.bio.startsWith('This')) {
        biography.classList.toggle('not-available', true)
    }

    repos.innerText = data.public_repos
    followers.innerText = data.followers
    following.innerText = data.following

    location.innerText = data.location
    if (data.location === 'Not Available') {
        locationSection.classList.toggle('not-available', true)
    }

    blog.innerText = data.blog
    blog.setAttribute('href', data.blog)
    if (data.blog === 'Not Available') {
        blogSection.classList.toggle('not-available', true)
    }


    twitter.innerText = data.twitter_username
    twitter.setAttribute('href', data.twitter_link)
    if (data.twitter_username === 'Not Available') {
        twitterSection.classList.toggle('not-available', true)
    }

    company.innerText = data.company
    company.setAttribute('href', data.company_link)
    if (data.company === 'Not Available') {
        companySection.classList.toggle('not-available', true)
    }
}