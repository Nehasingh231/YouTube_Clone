//  we are making this slice for make less api call 
// means jb koi word hm search kr chuke ho to o reserve ho jae
// dubara us word k lie api call n ho

const { createSlice } = require("@reduxjs/toolkit");


const searchSlice = createSlice({
     name: "search",
     initialState: {

     },
     reducers: {
          cacheResults: (state, action) => {

          }
     }
});


export const {cacheResults} = searchSlice.actions;
export default searchSlice.reducer;