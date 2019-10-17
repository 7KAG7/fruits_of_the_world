class User < ApplicationRecord
  # mount_uploader :avatar, AvatarUploader
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
<<<<<<< HEAD
         :recoverable, :rememberable, :validatable

  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  has_many :fruits, through: :reviews
  has_many :reviews
=======
         :recoverable, :rememberable, :trackable, :validatable

         attr_accessible :email, :password, :remember_me, :avatar, :avatar_cache, :remove_avatar

  validates_presence_of   :avatar
  validates_integrity_of  :avatar
  validates_processing_of :avatar
>>>>>>> 1b08bdae90a07595cace82381c555062ff1df098
end
