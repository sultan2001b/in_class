Rails.application.routes.draw do
  get 'genres/index'
  get 'genres/show'
  resources :authors, :books
  resources :genres, only: [:index, :show]
  # Create a full set of RESTful URLs for the authors table (e.g. /authors, /authors/:id)
end
