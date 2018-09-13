// navbar changes

export  {
    loginHandler,
    registerPersonDetailsHandler,
    registerSocialMediaHandler,
    registerPasswordHandler

} from './LoginActions'

// register process

export  {
    regEmail,
    regName,
    regAddress,
    regBday,
    regCountry,
    regNumber,
    regPassword,
    regInstagram,
    regTwitter,
    regFb

} from './RegisterActions'

// main layout chang

export  {

    mainPanelHandle,
    adminPanelHandle,
    userPanelHandle,

} from './PanelActions'

// admin layout chang

export  {

    adminItemHandler,
    adminChefHandler,
    adminUserHandler,

} from './AdminPanelActions'

// admin panel data loading

export  {

    allUsers,
    allItems

} from './AdminPanelDataLoadActions'

// loading bar changes

export  {

    stopLoading,
    startLoading

} from './LoadinBarActions'

export  {

    imageHandler

} from './ImageActions'