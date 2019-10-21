Rails.application.routes.draw do
  root 'fruits#index'
  devise_for :users

  resources :fruits, only: [:index, :show] do
    resources :reviews, only: [:new, :create]
  end

  resources :users, only: [:show]
  resources :fruits, only: [:index, :show]
end
