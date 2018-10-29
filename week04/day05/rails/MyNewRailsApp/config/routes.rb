Rails.application.routes.draw do
  get "/home", to: "pages#home"
  get "/contact", to: "pages#contact"
  get "/about", to: "pages#about"
  get "/users", to: "users#index"
  get "/posts", to: "posts#index"
  get "/posts/:post_name", to: "posts#show"
  get "/users/:username", to: "users#show"
  get "/colors/:color", to: "pages#color"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
