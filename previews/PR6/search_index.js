var documenterSearchIndex = {"docs":
[{"location":"#Home","page":"Home","title":"CUDSS.jl documentation","text":"","category":"section"},{"location":"#Overview","page":"Home","title":"Overview","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"CUDSS.jl is a Julia interface to the NVIDIA cuDSS library. NVIDIA cuDSS provides three factorizations (LDU, LDLᵀ, LLᵀ) for solving sparse linear systems on GPUs. For more details on using cuDSS, refer to the official cuDSS documentation.","category":"page"},{"location":"#Installation","page":"Home","title":"Installation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"julia> ]\npkg> add https://github.com/exanauts/CUDSS.jl.git\npkg> test CUDSS","category":"page"},{"location":"#Types","page":"Home","title":"Types","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"CudssMatrix\nCudssConfig\nCudssData\nCudssSolver","category":"page"},{"location":"#CUDSS.CudssMatrix","page":"Home","title":"CUDSS.CudssMatrix","text":"matrix = CudssMatrix(v::CuVector)\nmatrix = CudssMatrix(A::CuMatrix)\nmatrix = CudssMatrix(A::CuSparseMatrixCSR, struture::Union{Char, String}, view::Char; index::Char='O')\n\nCudssMatrix is a wrapper for CuVector, CuMatrix and CuSparseMatrixCSR. CudssMatrix is used to pass matrix of the linear system, as well as solution and right-hand side.\n\nstructure specifies the stucture for sparse matrices:\n\n'G' or \"G\": General matrix – LDU factorization;\n'S' or \"S\": Real symmetric matrix – LDLᵀ factorization;\n'H' or \"H\": Complex Hermitian matrix – LDLᴴ factorization;\n\"SPD\": Symmetric positive-definite matrix – LLᵀ factorization;\n\"HPD\": Hermitian positive-definite matrix – LLᴴ factorization.\n\nview specifies matrix view for sparse matrices:\n\n'L': Lower-triangular matrix and all values above the main diagonal are ignored;\n'U': Upper-triangular matrix and all values below the main diagonal are ignored;\n'F': Full matrix.\n\nindex specifies indexing base for sparse matrix indices:\n\n'Z': 0-based indexing;\n'O': 1-based indexing.\n\n\n\n\n\n","category":"type"},{"location":"#CUDSS.CudssConfig","page":"Home","title":"CUDSS.CudssConfig","text":"config = CudssConfig()\n\nCudssConfig stores configuration settings for the solver.\n\n\n\n\n\n","category":"type"},{"location":"#CUDSS.CudssData","page":"Home","title":"CUDSS.CudssData","text":"data = CudssData()\n\nCudssData holds internal data (e.g., LU factors arrays).\n\n\n\n\n\n","category":"type"},{"location":"#CUDSS.CudssSolver","page":"Home","title":"CUDSS.CudssSolver","text":"solver = CudssSolver(A::CuSparseMatrixCSR, structure::Union{Char, String}, view::Char; index::Char='O')\nsolver = CudssSolver(matrix::CudssMatrix, config::CudssConfig, data::CudssData)\n\nCudssSolver contains all structures required to solve linear systems with cuDSS. One constructor of CudssSolver takes as input the same parameters as CudssMatrix.\n\nstructure specifies the stucture for sparse matrices:\n\n'G' or \"G\": General matrix – LDU factorization;\n'S' or \"S\": Real symmetric matrix – LDLᵀ factorization;\n'H' or \"H\": Complex Hermitian matrix – LDLᴴ factorization;\n\"SPD\": Symmetric positive-definite matrix – LLᵀ factorization;\n\"HPD\": Hermitian positive-definite matrix – LLᴴ factorization.\n\nview specifies matrix view for sparse matrices:\n\n'L': Lower-triangular matrix and all values above the main diagonal are ignored;\n'U': Upper-triangular matrix and all values below the main diagonal are ignored;\n'F': Full matrix.\n\nindex specifies indexing base for sparse matrix indices:\n\n'Z': 0-based indexing;\n'O': 1-based indexing.\n\nCudssSolver can be also constructed from the three structures CudssMatrix, CudssConfig and CudssData if needed.\n\n\n\n\n\n","category":"type"},{"location":"#Functions","page":"Home","title":"Functions","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"cudss_set\ncudss_get\ncudss","category":"page"},{"location":"#CUDSS.cudss_set","page":"Home","title":"CUDSS.cudss_set","text":"cudss_set(matrix::CudssMatrix, v::CuVector)\ncudss_set(matrix::CudssMatrix, A::CuMatrix)\ncudss_set(matrix::CudssMatrix, A::CuSparseMatrixCSR)\ncudss_set(data::CudssSolver, param::String, value)\ncudss_set(config::CudssConfig, param::String, value)\ncudss_set(data::CudssData, param::String, value)\n\nThe available configuration parameters are:\n\n\"reordering_alg\": Algorithm for the reordering phase;\n\"factorization_alg\": Algorithm for the factorization phase;\n\"solve_alg\": Algorithm for the solving phase;\n\"matching_type\": Type of matching;\n\"solve_mode\": Potential modificator on the system matrix (transpose or adjoint);\n\"ir_n_steps\": Number of steps during the iterative refinement;\n\"ir_tol\": Iterative refinement tolerance;\n\"pivot_type\": Type of pivoting ('C', 'R' or 'N');\n\"pivot_threshold\": Pivoting threshold which is used to determine if digonal element is subject to pivoting;\n\"pivot_epsilon\": Pivoting epsilon, absolute value to replace singular diagonal elements;\n\"max_lu_nnz\": Upper limit on the number of nonzero entries in LU factors for non-symmetric matrices.\n\nThe available data parameter is:\n\n\"user_perm\": User permutation to be used instead of running the reordering algorithms.\n\n\n\n\n\n","category":"function"},{"location":"#CUDSS.cudss_get","page":"Home","title":"CUDSS.cudss_get","text":"value = cudss_get(data::CudssSolver, param::String)\nvalue = cudss_get(config::CudssConfig, param::String)\nvalue = cudss_get(data::CudssData, param::String)\n\nThe available configuration parameters are:\n\n\"reordering_alg\": Algorithm for the reordering phase;\n\"factorization_alg\": Algorithm for the factorization phase;\n\"solve_alg\": Algorithm for the solving phase;\n\"matching_type\": Type of matching;\n\"solve_mode\": Potential modificator on the system matrix (transpose or adjoint);\n\"ir_n_steps\": Number of steps during the iterative refinement;\n\"ir_tol\": Iterative refinement tolerance;\n\"pivot_type\": Type of pivoting ('C', 'R' or 'N');\n\"pivot_threshold\": Pivoting threshold which is used to determine if digonal element is subject to pivoting;\n\"pivot_epsilon\": Pivoting epsilon, absolute value to replace singular diagonal elements;\n\"max_lu_nnz\": Upper limit on the number of nonzero entries in LU factors for non-symmetric matrices.\n\nThe available data parameters are:\n\n\"info\": Device-side error information;\n\"lu_nnz\": Number of non-zero entries in LU factors;\n\"npivots\": Number of pivots encountered during factorization;\n\"inertia\": Tuple of positive and negative indices of inertia for symmetric and hermitian non positive-definite matrix types;\n\"perm_reorder\": Reordering permutation;\n\"perm_row\": Final row permutation (which includes effects of both reordering and pivoting);\n\"perm_col\": Final column permutation (which includes effects of both reordering and pivoting);\n\"diag\": Diagonal of the factorized matrix.\n\nThe data parameters \"info\", \"lu_nnz\" and \"perm_reorder\" require the phase \"analyse\" performed by cudss. The data parameters \"npivots\", \"inertia\" and \"diag\" require the phases \"analyse\" and \"factorization\" performed by cudss. The data parameters \"perm_row\" and \"perm_col\" are available but not yet functional.\n\n\n\n\n\n","category":"function"},{"location":"#CUDSS.cudss","page":"Home","title":"CUDSS.cudss","text":"cudss(phase::String, solver::CudssSolver, x::CuVector, b::CuVector)\ncudss(phase::String, solver::CudssSolver, X::CuMatrix, B::CuMatrix)\ncudss(phase::String, solver::CudssSolver, X::CudssMatrix, B::CudssMatrix)\n\nThe available phases are \"analysis\", \"factorization\", \"refactorization\" and \"solve\". The phases \"solve_fwd\", \"solve_diag\" and \"solve_bwd\" are available but not yet functional.\n\n\n\n\n\n","category":"function"}]
}
