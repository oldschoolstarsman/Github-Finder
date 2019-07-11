$(document).ready(function(){

    
    $('#searchUser').on('keyup', function(e){
        let username = (e.target.value);

        // Request to GITHUB
        $.ajax({
            url: 'https://api.github.com/users/'+ username,
            data: {
                client_id: '64c9edf6cb30ad25d178',
                client_secret:'036741b5d4744f5bd692a1356fbf87e4052325da'
            }
        }).done(function(user){
            let m = moment.utc(user.created_at).format('LLL');
            console.log(m);
            $('#profile').html(`
            <div class="card">
                <div class="card-header">${user.name}</div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-3">
                            <img class="thumbnail avatar mb-2 rounded" src="${user.avatar_url}">
                            <a target="_blank" class="btn btn-secondary d-block" href="${user.html_url}">View Profile </a>
                        </div>
                        <div class="col-md-9">
                            <a target="_blank" href="${user.html_url}?tab=repositories"><span class="badge badge-info">Public Repos: ${user.public_repos}</span></a>
                            <span class="badge badge-success">Public Gists: ${user.public_gists}</span>
                            <span class="badge badge-danger">Followers: ${user.followers}</span>
                            <span class="badge badge-warning">Public Repos: ${user.following}</span>
                            <br></br>
                            <ul class="list-group">
                                <li class="list-group-item border-0">Company: ${user.company}</li>
                                <li class="list-group-item border-0">Bio: "${user.bio}"</li>
                                <li class="list-group-item border-0">Location: ${user.location}</li>
                                <li class="list-group-item border-0">Member since: ${m}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            `)
        })
    })
});