Rails.application.routes.draw do
  root 'fruits#index'
  devise_for :users
<<<<<<< HEAD
  
=======

<<<<<<< HEAD
>>>>>>> 0c91857547d777324f8c32b8fc1f4842688a606a
  resources :fruits, only: [:index, :show] do
    resources :reviews, only: [:new, :create]
  end

  resources :users, only: [:show]
<<<<<<< HEAD
  resources :fruits, only: [:index, :show]
=======
  
=======
  resources :fruits, only: [:index, :show]
>>>>>>> 1b08bdae90a07595cace82381c555062ff1df098
>>>>>>> 0c91857547d777324f8c32b8fc1f4842688a606a
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

end
