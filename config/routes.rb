Rails.application.routes.draw do
  root 'fruits#index'
  devise_for :users

  resources :fruits, only: [:index, :show] do
    resources :reviews, only: [:new, :create]
  end

  resources :users, only: [:show]
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

end
