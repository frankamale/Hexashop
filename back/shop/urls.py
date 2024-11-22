from django.urls import path
from . import views

urlpatterns = [
    path("", views.get_product, name="Products List"),
    path("addProducts", views.add_product, name="Add Products"),
    path("updateProducts/<pk>/", views.update_product, name="Update Products"),
    path("deleteProducts/<pk>", views.delete_product, name="Delete Products"),
    
   path("customers/", views.get_customers, name="Customer List"),
   path("addCustomers/", views.add_customers, name="Add Customer"),
   path("updateCustomers/<pk>/", views.update_customers, name="Update Customer"),
   path("deleteCustomers/<pk>/", views.delete_customers, name="Delete Customer"),
   
   path("addCategory", views.add_category, name="Add Category"),
   path("category", views.get_category, name="get Category"),
   
]