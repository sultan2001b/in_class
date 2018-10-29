class UsersController < ApplicationController
def index

end
def show
    # raise(error)
    @username = params[:username]
    @user = {
        first_name: "faisal",
        last_name: "alQahtani",
        email:"faisal@ga.co",
    }
    

end
end
