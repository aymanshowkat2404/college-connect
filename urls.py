from django.contrib import admin
from django.urls import path
from tour_app import views
urlpatterns = [
    path('admin/', admin.site.urls),  # Existing admin URL
    path('', views.index, name='index'),  # Example home URL
    path('signup/', views.signup, name='signup'),  # Example register URL
    path('login/', views.login_view, name='login'),  # Example login URL
    path('dashboard/', views.dashboard, name='dashboard'),  # Example dashboard URL
    path('logout/', views.logout, name='logout'),  # Example logout URL
    path('colleges/', views.colleges_view, name='colleges'),
    path('cmr-university/', views.cmr_university_view, name='cmr_university'), 
    path('admin_login/', views.admin_login, name='admin_login'),
    path('reva/', views.reva_view, name='reva'),
    path('kj/', views.kj_view, name='kj'),
    path('presidency/', views.presidency_view, name='presidency'),
    path('christ/', views.christ_view, name='christ'),
    path('admission/', views.admission, name='admission'),
    path('admission/success/', views.admission_success, name='admission_success'),
    path('admission/', views.admission, name='admission'),
    path('hostel/', views.hostel, name='hostel'),
    path('facilities/', views.facilities, name='facilities'),
    path('events/', views.events, name='events'),
    path('review/', views.review, name='review'),
    path('map/', views.map, name='map'),
    path('admin-dashboard/', views.admin_dashboard, name='admin_dashboard'),

    
]



