Rails.application.routes.draw do
  root 'homes#index'
  get '/fruits', to: 'homes#index'
  get '/fruits/:id', to: 'homes#index'

  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :fruits, only: [:index, :show]
    end
  end
  # resources :fruits, only: [:index, :show] do
  #   resources :reviews, only: [:new, :create]
  #   get 'search', on: :collection
  # end
  #
  # resources :users, only: [:show]
  #
  # resources :fruits, only: [:index, :show]
end
