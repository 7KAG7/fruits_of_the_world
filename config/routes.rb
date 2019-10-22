Rails.application.routes.draw do
<<<<<<< HEAD
  root 'homes#index'
  get '/fruits', to: 'homes#index'
  get '/fruits/:id', to: 'homes#index'
=======
  root 'fruits#index'
  devise_for :users

  resources :fruits, only: [:index, :show] do
    resources :reviews, only: [:new, :create]
  end

  resources :users, only: [:show]
  resources :fruits, only: [:index, :show]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
>>>>>>> master

  devise_for :users
  
  namespace :api do
    namespace :v1 do
      resources :fruits, only: [:index, :show]
    end
  end
end
