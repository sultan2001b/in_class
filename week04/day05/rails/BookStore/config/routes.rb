Rails.application.routes.draw do
  get "/home", to: "pages#home"
  get "/books", to: "books#index"
  get "/books/:title", to: "books#show"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
