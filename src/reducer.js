export const initialState={
    user:null,
    playists:[],
    playing:false,
    item: null,
    //remove after developing, this allows direct login
// token: 'BQBpE51ipc1Zxlp-XyYhQVG_18V-Uziwz4Np4sCxx3I6UKSsoGkcf6dAabvKkg71oYjiCX8UOKTqOdRlYS74eZSbB78mxxaiiRIJOiPqmHkjg28GqFcnsEtM6t6UP8CMtMYXBW4-X4fZQQ9QSUSJ2jpdpCSwczFhqjaN5iG7zE30yKHB',
};

const reducer= (state,action)=>{
        console.log(action);
        switch(action.type){
            case 'SET_USER': 
            return{
                ...state,
                user:action.user,
            }
            case 'SET_TOKEN': 
            return{
                ...state,
                token:action.token,
            }

            case 'SET_PLAYLISTS':
                return{
                    ...state,
                    playlists:action.playlists,
                }  

                case  'SET_DISCOVER_WEEKLY':
                return{
                    ...state,
                    discover_weekly:action.discover_weekly,
                }  
            default: return state;
        }
}

export default reducer;