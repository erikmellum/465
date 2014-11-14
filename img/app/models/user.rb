class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :images, dependent: :destroy
  has_many :accesses, dependent: :destroy
  has_many :images, through: :accesses
  validates :name, presence: true

  def getname
    name
  end

  def getid
    id
  end

  def getemail
   email
  end

end
