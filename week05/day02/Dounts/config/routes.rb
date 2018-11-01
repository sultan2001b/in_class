Rails.application.routes.draw do
  resources :donuts
  # resources :donuts, only: [:index, :show, :new, :create, :edit, :update]

  # get "donuts/index"
  # get "donuts/show"
  # get "donuts/edit"
  # get "donuts/new"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
