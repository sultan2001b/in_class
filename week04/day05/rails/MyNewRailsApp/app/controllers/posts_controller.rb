class PostsController < ApplicationController 
def index
end
def show
     @post_name = params[:post_name]
    @is_admin = true
@fav_number =42

end
end