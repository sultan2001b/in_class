#REST - Representatonal State Transfer

Rails.application.routes.draw do
  root 'pages#app'
  resources :todos
end
